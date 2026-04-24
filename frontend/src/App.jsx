import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        <i className="fa fa-line-chart text-success"></i> StockuiX
      </h1>
      <p className="lead text-center">Bootstrap and FontAwesome 4 are now ready to use.</p>

      <div className="text-center mt-4">
        <button className="btn btn-primary me-2">
          <i className="fa fa-refresh"></i> Refresh Data
        </button>
        <button className="btn btn-success">
          <i className="fa fa-plus"></i> Buy Stock
        </button>
      </div>
    </div>
  )
}

export default App
