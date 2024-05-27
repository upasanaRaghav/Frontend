import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTenantUserDetails,
  addOrRemoveContact,
  clearAlert,
} from "../../features/ownerUser/ownerUserSlice";
import { useParams } from "react-router-dom";
import { Footer, PageLoading, AlertToast } from "../../components";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button } from "@mui/material";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import PersonRemoveAlt1RoundedIcon from "@mui/icons-material/PersonRemoveAlt1Rounded";
import CircularProgress from "@mui/material/CircularProgress";
import ImageViewer from "react-simple-image-viewer";

const TenantUserDetailPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const {
    user,
    isLoading,
    isProcessing,
    alertFlag,
    alertMsg,
    alertType,
    isContact,
  } = useSelector((state) => state.ownerUser);

  useEffect(() => {
    dispatch(getTenantUserDetails({ slug }));
  }, [dispatch, slug]);

  const handleClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(clearAlert());
    },
    [dispatch]
  );

  // toggle open and close of ImageViewer
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // open the ImageViewer and set the currentImageIndex to the index of the image that was clicked
  const openImageViewer = useCallback((index) => {
    setIsViewerOpen(true);
  }, []);

  // close the ImageViewer
  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  if (isLoading) return <PageLoading />;

  if (!user)
    return (
      <div className="flex justify-center items-start h-screen mt-10">
        <h1>User Not found</h1>
      </div>
    );

  return (
    <>
      <main className="flex flex-col mx-auto mb-12 mt-10 md:flex md:ml-10">
        <h3 className="font-heading font-semibold text-4xl">Profile</h3>
        <div className="flex flex-col mt-6 gap-4 md:flex-row">
          <div className="w-48 h-48 md:w-96 md:h-96 cursor-pointer">
            <img
              src={user?.profileImage}
              alt="profile"
              className="rounded-md w-full h-full object-cover"
              onClick={() => openImageViewer(0)}
            />
            {/* Open and View the Image */}
            {isViewerOpen && (
              <ImageViewer
                src={[user?.profileImage]}
                currentIndex={0}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
                closeOnClickOutside={true}
              />
            )}
          </div>
          <div className="md:ml-4">
            <p className="mt-2 text-2xl font-robotoNormal">
              {user?.firstName} {user?.lastName}
            </p>

            <div className="flex mt-2 gap-2 items-center">
              <LocationOnOutlinedIcon sx={{ color: "#019149" }} />
              <p>{user?.address}</p>
            </div>
            <div className="flex mt-2 gap-2 items-center">
              <LocalPhoneRoundedIcon sx={{ color: "green" }} />
              <p className="ml-3">+91 {user?.phoneNumber}</p>
            </div>
            <div className="flex mt-2 gap-2 items-center">
              <EmailRoundedIcon sx={{ color: "#E7AB79" }} />
              <p className="">{user?.email}</p>
            </div>
            {isContact ? (
              <Button
                disabled={isProcessing}
                onClick={() => dispatch(addOrRemoveContact({ id: user?._id }))}
                variant="contained"
                color="error"
                startIcon={<PersonRemoveAlt1RoundedIcon />}
                size="medium"
                sx={{
                  color: "white",
                  marginTop: "12px",
                }}
              >
                {isProcessing ? (
                  <CircularProgress
                    size={26}
                    sx={{
                      color: "#fff",
                    }}
                  />
                ) : (
                  "Remove"
                )}
              </Button>
            ) : (
              <Button
                disabled={isProcessing}
                onClick={() => dispatch(addOrRemoveContact({ id: user?._id }))}
                variant="contained"
                color="secondary"
                startIcon={<ContactPageRoundedIcon />}
                size="medium"
                sx={{
                  color: "white",
                  marginTop: "12px",
                }}
              >
                {isProcessing ? (
                  <CircularProgress
                    size={26}
                    sx={{
                      color: "#fff",
                    }}
                  />
                ) : (
                  "Add"
                )}
              </Button>
            )}
          </div>
        </div>
        <AlertToast
          alertFlag={alertFlag}
          alertMsg={alertMsg}
          alertType={alertType}
          handleClose={handleClose}
        />
      </main>
      <Footer />
    </>
  );
};

export default TenantUserDetailPage;
