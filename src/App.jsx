import Title from './components/Title';
import UsersList from './components/UsersList';
const USERS = [
	{
		name: 'Pablo Castellanos',
		active: 'Activo',
		role: 'Profesor'
	},
	{
		name: 'Jose Miguel Fernández',
		active: 'Activo',
		role: 'Profesor'
	},
	{
		name: 'Javier López',
		active: 'Activo',
		role: 'Alumno'
	}
];
const App = () => (
	<UsersList users={USERS}>
		<Title>Listado de usuarios</Title>
	</UsersList>
);
export default App;
