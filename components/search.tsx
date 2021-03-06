import React, { useState } from "react"
import { Select, Form, Button, Search, Label } from "semantic-ui-react"

const countryOptions = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" },
  { key: "al", value: "al", text: "Albania" },
  { key: "dz", value: "dz", text: "Algeria" },
  { key: "as", value: "as", text: "American Samoa" },
  { key: "ad", value: "ad", text: "Andorra" },
  { key: "ao", value: "ao", text: "Angola" },
  { key: "ai", value: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", text: "Antigua" },
  { key: "ar", value: "ar", text: "Argentina" },
  { key: "am", value: "am", text: "Armenia" },
  { key: "aw", value: "aw", text: "Aruba" },
  { key: "au", value: "au", text: "Australia" },
  { key: "at", value: "at", text: "Austria" },
  { key: "az", value: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", text: "Barbados" },
  { key: "by", value: "by", text: "Belarus" },
  { key: "be", value: "be", text: "Belgium" },
  { key: "bz", value: "bz", text: "Belize" },
  { key: "bj", value: "bj", text: "Benin" },
]

const SearchEvent = () => {
  const [searchCountry, setSearchCountry] = useState("")
  const [results, setResults] = useState([])
}

const resultRenderer = ({ text }) => <Label content={text} />

const SearchForm = () => {
  const []
  const handleSearchChange = React.useCallback((e, data) => {}, [])
  return (
    <Form className="search-form">
      <Form.Field>
        <label>First Name</label>
        <Select placeholder="Categorie" options={countryOptions} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <Search
          loading={false}
          onResultSelect={(e, data) => console.log(data.result)}
          onSearchChange={handleSearchChange}
          resultRenderer={resultRenderer}
          results={results}
          value={value}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default SearchForm
