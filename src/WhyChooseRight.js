const template = document.querySelector("#rightTemplateWhychoose");
const container = document.querySelector("#rightContainerWhyChoose");
export const whyChooseRight = (data) => {
  if (!data) {
    return false;
  }
  data.map((currElem) => {
    const { id, title, description } = currElem;
    const templateClone = document.importNode(template.content, true);
    templateClone.querySelector("#rightId").textContent = id;
    templateClone.querySelector(".headingRightWhyChoose").textContent = title;
    templateClone.querySelector(".descriptionRightWhyChoose").textContent =
      description;
    container.append(templateClone);
  });
};
