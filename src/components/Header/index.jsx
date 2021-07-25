import logoImg from '../../assets/logo.svg';
import { useCrud } from '../../hooks/useCrud';
import { Container, Content } from './styles';

export function Header() {
  const {
    crudList,
    selectedCrud,
    handleChangeSelectedCrud,
  } = useCrud();
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="shop-logo" />
        <nav>
          {Object.entries(crudList).map(crud => 
            <p key={`nav-${crud}`} className={selectedCrud === crud[0] && "active"} onClick={() => handleChangeSelectedCrud(crud[0])}>{crud[1].label}</p>
          )}
        </nav>
      </Content>
    </Container>
  );
}