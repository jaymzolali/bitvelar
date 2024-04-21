

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }


const AddressShortener = ( { longAddress } ) => {
    const shortAddress = Math.abs(hashCode(longAddress)).toString(16).substring(0, 8);

  return (
    <div>
        <p>Long Address: {longAddress}</p>
        <p>Shortened Address: {shortAddress}</p>
    </div>
  )
}

export default AddressShortener