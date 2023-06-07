function DessertsList(props) {
    let dessertItem = props.data.map(
      (desserts, index) => {
        const dessertText = `${desserts.name} - ${desserts.calories} cal`
        return <li key={index}>{ dessertText}</li>
      }
    )
    return <ul>
      {dessertItem}
    </ul>;
  }
  
  export default DessertsList;
  