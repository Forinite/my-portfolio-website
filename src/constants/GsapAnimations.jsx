export const NumAnimation = (action, id) => {
  const box = document.getElementById(id);

  box.style.transition = "all 0.3s";
  action === "hover" ? (box.style.right = "50px") : (box.style.right = "0px");
};
