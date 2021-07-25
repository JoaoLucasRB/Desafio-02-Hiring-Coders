import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;

  .MuiTableContainer-root {
    height: calc(100vh - 10rem);
    border-radius: 8px;

    // Scrollbar
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--gray);
      filter: brightness(0.8);
      border-radius: 0 100px 100px 0;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--input-placeholder);
      filter: brightness(0.8);
      border-radius: 0 100px 100px 0;
      transition: filter 0.3s;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--input-text);
      filter: brightness(0.8);
    }
    
    .MuiTableHead-root {
      .MuiTableRow-root {
        background: none !important;

        .MuiTableCell-root {
          background-color: var(--yellow);
          color: var(--gray);
          border: none;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }

    .MuiTableBody-root {
      .MuiTableRow-root {
        transition: filter 0.3s;

        &:hover {
          cursor: pointer;
          filter: brightness(0.8);
        }

        .MuiTableCell-root {
          background-color: var(--gray);
          color: white;
          border: none;
          font-weight: 600;
        }
      }
    }
  
  }
`