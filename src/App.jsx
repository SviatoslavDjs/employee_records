import AppInfo from './components/app-info/app-info'
import SearchPanel from './components/search-panel/search-panel'
import AppFilter from './components/app-filter/app-filter'
import EmployeesList from './components/employees-list/employees-list'
import EmployeesAddForm from './components/employees-add-form/employees-add-form'
import './App.css'


function App() {
  const data = [{name: 'Sviaatoslav', salary: 8100, increase: false, id:1},{name: 'Bogdan', salary: 900, increase: true, id:2},{name: 'Petro', salary: 1000, increase: false, id:3}
  ];
  return (
    <div className='app'>
<AppInfo></AppInfo>
<div className="search-panel">
<SearchPanel/>
<AppFilter/>
</div>
<EmployeesList data = {data} />
<EmployeesAddForm/>
    </div>
  )
}

export default App

