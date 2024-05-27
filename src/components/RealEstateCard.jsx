import {
  Button,
  CardActionArea,
  Avatar,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { format } from "../utils/valueFormatter";
import { Link } from "react-router-dom";

const RealEstateCard = ({
  title,
  slug,
  price,
  category,
  address,
  realEstateImages,
  propertyOwner,
  fromOwnerUser,
  fromUserProfile,
}) => {
  return (
    <>
      <Card
        sx={{
          width: 345,
          bgcolor: "#023047",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2)",
          },
          color: "#102a43",
        }}
      >
        <Link
          to={
            fromOwnerUser
              ? `/owner/real-estate/${slug}`
              : `/tenant/real-estate/${slug}`
          }
        >
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ maxHeight: 150 }}
              image={realEstateImages[0]}
              alt={title}
            />
            <CardContent>
              <h4
                className="mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-primaryDark transition-all duration-300 ease-in-out"
                style={{ maxWidth: "31ch" }}
              >
                {title}
              </h4>
              <p className="text-sm text-yellow-300">{category}</p>
              <p className="font-semibold">
              ₹ <span className="">{format(price)}</span> / month
              </p>
              <p className="text-base">
                <LocationOnOutlinedIcon color="secondary" /> {address?.location}
                , {address?.streetName}
              </p>
            </CardContent>
          </CardActionArea>
        </Link>
        {!fromOwnerUser && !fromUserProfile && (
          <div className="flex p-2">
            <div className="flex items-center gap-1">
              <Avatar
                src={propertyOwner?.profileImage}
                alt={propertyOwner?.firstName}
                sx={{ width: 36, height: 36 }}
              />
              <span className="font-semibold text-xs text-yellow-300">
                {propertyOwner?.firstName} {propertyOwner?.lastName}
              </span>
            </div>
            <Link
              className="ml-auto"
              to={`/tenant/owner-user/${propertyOwner?.slug}`}
            >
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                sx={{
                  color: "yellow",
                }}
              >
                Owner Details
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </>
  );
};

export default RealEstateCard;
