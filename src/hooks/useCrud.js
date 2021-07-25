import { createContext, useState, useContext } from 'react'

export const CrudContext = createContext({});

export function CrudProvider({ children }) {
  const [selectedCrud, setSelectedCrud] = useState("usuario");
  const [dataList, setDataList] = useState([]);

  const crudList = {
    produto: {
      label: "Produto",
      storageRef: "products_data",
      fields: {
        codigo: {
          label: "Código",
          type: "number"
        },
        nome: {
          label: "Nome",
          type: "text"
        },
        marca: {
          label: "Marca",
          type: "text"
        },
        quantidade: {
          label: "Quantidade",
          type: "Number"
        }
      }
    },
    usuario: {
      label: "Usuario",
      storageRef: "clients_data",
      fields: {
        name: {
          label: "Nome",
          type: "text"
        },
        cpf: {
          label: "CPF",
          type: "number",
          maxLength: 11
        },
        email: {
          label: "E-mail",
          type: "email"
        },
        telefone: {
          label: "Telefone",
          type: "number",
          maxLength: 11
        },
        cep: {
          label: "CEP",
          type: "number",
          maxLength: 8
        },
        logradouro: {
          label: "Logradouro",
          type: "text"
        },
        numero: {
          label: "Número",
          type: "number",
          maxLength: 6,
        },
        complemento: {
          label: "Complemento",
          type: "text"
        },
        cidade: {
          label: "Cidade",
          type: "text"
        },
        estado: {
          label: "Estado",
          type: "select",
          values: {
            AC: "Acre",
            AL: "Alagoas",
            AP: "Amapá",
            AM: "Amazonas",
            BA: "Bahia",
            CE: "Ceará",
            ES: "Espírito Santo",
            GO: "Goiás",
            MA: "Maranhão",
            MT: "Mato Grosso",
            MS: "Mato Grosso do Sul",
            MG: "Minas Gerais",
            PA: "Pará",
            PB: "Paraíba",
            PR: "Paraná",
            PE: "Pernambuco",
            PI: "Piauí",
            RJ: "Rio de Janeiro",
            RN: "Rio Grande do Norte",
            RS: "Rio Grande do Sul",
            RO: "Rondônia",
            RR: "Roraima",
            SC: "Santa Catarina",
            SP: "São Paulo",
            SE: "Sergipe",
            TO: "Tocantins",
            DF: "Distrito Federal",
          }
        },
      }
    }
  }

  function handleChangeSelectedCrud(crud) {
    let newDataList = [];
    if (localStorage.getItem(crudList[crud].storageRef))
      newDataList = JSON.parse(localStorage.getItem(crudList[crud].storageRef));
    setSelectedCrud(crud);
    setDataList(newDataList);
  }

  return (
    <CrudContext.Provider value={{
      crudList,
      selectedCrud,
      setSelectedCrud,
      handleChangeSelectedCrud,
      dataList,
    }}>
      {children}
    </CrudContext.Provider>
  )
}

export function useCrud() {
  const context = useContext(CrudContext);
  return context;
}