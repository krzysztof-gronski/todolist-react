

export const useAlertLoadingError = () => {

  const dispatch = useDispatch();
  dispatch(clearLoadingError());
  return true;

};

// export const handleAlertLoadingError = async (sampleTaskButtonRef) => {

//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   return true;
// };
  
  
 

