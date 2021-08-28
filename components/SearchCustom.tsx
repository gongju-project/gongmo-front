import React from "react"
import styles from "../styles/Home.module.css"
import { Input } from 'antd'
import 'antd/dist/antd.css'

interface SearchInterface {
	searchString: string,
	searchbarStyle: string
}
const SearchCustom = ({ searchString, searchbarStyle }: SearchInterface) => {
	const { Search } = Input

	const onSearchStringHandler = (searchStr: string) => {

	}
	return <>
		<Search className={ searchbarStyle } bordered={false} size="large" placeholder="검색" onSearch={() => onSearchStringHandler(searchString)}>
		</Search>
	</>
}

export default SearchCustom