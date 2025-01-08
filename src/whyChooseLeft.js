const container = document.querySelector(".left-section-container ");
const template = document.querySelector("#templateWhyChooseLeft");
export const whyChooseLeft = (data) => {
  if (!data) {
    return false;
  }
  data.forEach((currElem) => {
    const { id, title, description } = currElem;
    const cloneTemplate = document.importNode(template.content, true);
    cloneTemplate.querySelector("#number").textContent = id;
    cloneTemplate.querySelector("#headingLeftWhyChoose").textContent = title;
    cloneTemplate.querySelector("#descriptionLeftWhyChoose").textContent =
      description;
    container.append(cloneTemplate);
  });
};
