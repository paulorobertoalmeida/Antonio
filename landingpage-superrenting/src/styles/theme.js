const base = {
    easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    background: "rgb(4,137,69)",
    background: "linear-gradient(0deg, rgba(4,137,69,0.861782212885154) 0%, rgba(255,254,237,1) 32%, rgba(228,191,255,1) 70%);",
    colorBlack: "rgb(0, 0, 0)"
  };
  
  const dark = {
    id: "dark",
    ...base,
    background: "rgb(4,1,32)",
    background: "linear-gradient(45deg, rgba(4,1,32,1) 6%, rgba(21,1,53,1) 87%)",
    textColor: "white",
    navColor: "black"
  };
  
  const light = {
    id: "light",
    ...base,
    backgroundColor: "white",
    textColor: "white",
    textColorContent: "black",
    navColor: "black"
  };
  
  export const theme = { dark, light };
  