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
const App = () => <UsersList users={USERS} />;
export default App;
