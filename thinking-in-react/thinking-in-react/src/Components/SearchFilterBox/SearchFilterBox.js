import React, { Component } from 'react';
import './SearchFilterBox.css'
import './Checkbox.css'
import './ResultsDisplay.css'

const FILLER_TEXT = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const result_list = N => Array(N).fill().map((_,n)=> result(n))
const result = n => Object({name:`Product_${n}`, price:`${n}.00`, in_stock:Math.floor(Math.random()*2) })


export class SearchFilterBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            query:'',
            inStock_only:false,
            results: Array(4).fill().map((_,n) => Object({category: `Category ${n}`, items: result_list(5)})),
        }
        this.handle_toggleFilter = this.handle_toggleFilter.bind(this)
        this.handle_query = this.handle_query.bind(this)
    }

    handle_toggleFilter(){
        this.setState({inStock_only: !this.state.inStock_only})
        console.log(`filter toggle ${!this.state.inStock_only} => ${this.state.inStock_only}`)
    }

    handle_query(event){
        const query = event.target.value
        this.setState({query:query})
        console.log(`query: ${this.state.query}`)
    }

    render() {
        return (
            <div className="SearchBoxContainer">
                <SearchInput updateQuery={this.handle_query} />
                <CheckBox handleToggle={this.handle_toggleFilter} />
                <ResultsDisplay categories={this.state.results} inStock_only={this.state.inStock_only} query={this.state.query} />
            </div>
        );
    }
}


function SearchInput(props){
    return <input onKeyUp={props.updateQuery} className="SearchInput" placeholder="Search..." />
}

function CheckBox(props){
    return (
    <label className="CheckBoxContainer">
        <input onInput={props.handleToggle} type="checkbox" />
        <span className="Checkmark" />
        <div className="vertical-center-container">
            <div className="CheckBoxLabel vertical-center">Show in-stock items only</div>
        </div>
    </label>
    );
}

function ResultsDisplay(props){
    console.log(props)
    let results = props.categories.map(result => {
        const category = result.category;
        let items = result.items;
        /* PERFORM RESULTS FILTERING */
        items = (props.inStock_only)
            ? items.filter(item => item.in_stock)
            : items
        items = (props.query)
            ? items.filter(item => item.name.includes(props.query))
            : items
        /* RETURN EMPTY DIV IF NO FILTER RESULTS */
        return (items.length>0)
                    ? <ResultsCategoryBlock key={category} category={category} items={items} />
                    : <div></div>
    })

    return (
        <div>{results}</div>
    );
}

function ResultsCategoryBlock(props){
    return (
        <div className="ResultsDisplayContainer">
            <ResultsCategoryLabel content={props.category} />
            {props.items.map(item => <ResultItem key={`item${Math.random()*Math.random()/Math.random()}`} content={item} />)}
        </div>
    );
}

function ResultsCategoryLabel(props){
    return (
        <div className="ResultsCategoryLabel">
            {props.content}
        </div>
    );
}

function ResultItem(props){
    return (
        <div>
            <div className="ResultName">{props.content.name}</div>
            <div className="ResultPrice">${props.content.price}</div>
        </div>
    );
}



