import { useState } from 'react';
import Swal from 'sweetalert2';
import { useCrud } from '../../hooks/useCrud';
import { FormContainer } from './styles';

export function DynamicForm() {
  const [formData, setFormData] = useState({});

  const {
    selectedCrud,
    crudList
  } = useCrud();
  const fieldList = crudList[selectedCrud].fields;

  function handleInputOnChange(event, field,) {
    const newFormData = { ...formData };
    newFormData[field] = event.target.value;
    setFormData(newFormData);
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let field in fieldList) {
      if (!formData[field]) {
        Swal.fire({
          title: 'Oops..',
          text: `O campo '${fieldList[field].label}' não pode estar vazio`,
          icon: "warning",
          confirmButtonText: "Ok",
          confirmButtonColor: "#EBA417"
        });
        return;
      } else if (fieldList[field].type === 'email' && !validateEmail(formData[field])) {
        Swal.fire({
          title: 'Oops..',
          text: "O campo 'E-mail' não pode estar vazio, e deve ser um email válido",
          icon: "warning",
          confirmButtonText: "Ok",
          confirmButtonColor: "#EBA417"
        });
        return;
      }
    }
    const newStorage = JSON.parse(localStorage.getItem(crudList[selectedCrud].storageRef) || '[]');
    newStorage.push(formData);
    localStorage.setItem(crudList[selectedCrud].storageRef, JSON.stringify(newStorage));
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Cadastrar um novo <span>{crudList[selectedCrud].label}</span></h2>
      {Object.entries(fieldList).map((field, index) => {
        switch (field[1].type) {
          case "text":
          case "number":
          case "email":
            return <input
              type={field[1].type}
              placeholder={field[1].label}
              key={`input-for-${field[0]}-${index}`}
              onChange={(e) => handleInputOnChange(e, field[0])}
              maxLength={field[1].maxLength ? field[1].maxLength : 64}
            />
          case "select":
            return <select key={`select-for-${field[0]}-${index}`} onChange={(e) => handleInputOnChange(e, field[0])}>
              {Object.entries(field[1].values).map(option =>
                <option value={option[0]} key={`option-for-${field[0]}-value-${option[0]}`}>{option[1]}</option>
              )}
            </select>
          default: return <div key={`empty-field-${index}`}>1</div>
        }
      })}
      <button type="submit">Cadastrar</button>
    </FormContainer>
  );
}