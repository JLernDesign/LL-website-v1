export const useUtils = () => {
  // one function here
  const globalFunc = () => {
    console.log('this is a global composable function!');
  };

  // another function
  const globalName = () => {
    console.log('name!');
  };

  // return all function names
  return {
    globalFunc,
    globalName,
  };
};
