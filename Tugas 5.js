const form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();

  const checkedCheckboxes = document.querySelectorAll(
    'input[name="colors"]:checked'
  );
  const selectedValues = [];

  checkedCheckboxes.forEach(function (checkbox) {
    selectedValues.push(checkbox.value);
  });

  if (selectedValues.length === 0) {
    alert("Pilih 1 warna");
  } else {
    alert(selectedValues);
    form.reset();

    const box = document.getElementsByClassName('box');
    const boxes = box[0];
    boxes.style.backgroundColor = selectedValues[0]


    document.body.append(boxes)
  }
});