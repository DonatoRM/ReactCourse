import Title from './components/Title';
import UsersList from './components/UsersList';
const USERS = [
	{
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Javier López',
		active: false,
		role: 'student'
	}
];
const App = () => {
	console.log('App');
	return (
		<UsersList users={USERS}>
			<Title>Listado de usuarios</Title>
		</UsersList>
	);
};
export default App;
