import { Container } from './styles';
import { DynamicForm } from '../DynamicForm';
import DynamicTable from '../DynamicTable';

export function Body() {
  return (
    <Container>
      <DynamicTable />
      <DynamicForm />
    </Container>
  );
}