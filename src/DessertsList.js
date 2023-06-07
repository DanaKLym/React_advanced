function DessertsList(props) {
  let dessertItem = props.data.filter(dessert => dessert.calories < 500).sort((a,b) => a.calories - b.calories).map(
    (desserts) => {
      const dessertText = `${desserts.name} - ${desserts.calories} cal`
      //index item for a key in sorted list may impact the performance of the app, so if the position of the elements may be somehow altered (removed, added, sorted out by the user) it's better to avoid prescribing index itam to the key attribute
      return <li key={desserts.name}>{ dessertText}</li>
    }
  )
    return <ul>
      {dessertItem}
    </ul>;
  }
  
  export default DessertsList;
  