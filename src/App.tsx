import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { LoaderBox } from './components/loader-box/loader-box.component';
import { Loader } from './components/loader/loader.component';
import { SearchBox } from './components/search-box/search-box.component';
import { PostEndpointResponse } from './interfaces/post-endpoint.response';
import { StateItemFormat } from './interfaces/state.format';

export default class App extends React.Component {
  private postEndpoint = "https://jsonplaceholder.typicode.com/posts";

  state: { postData: Array<StateItemFormat>,filteredData: Array<StateItemFormat>,isLoading:boolean } = {
     postData: [],
     filteredData:[],
     isLoading:true, 
    };

  componentDidMount() {
    fetch(this.postEndpoint)
      .then(response => response.json())
      .then(this.formatData)
  }


  //Data formatter
  formatData = (response: PostEndpointResponse[]) => {
    const data: StateItemFormat[] = response.map((item) => {
      const dataItem: StateItemFormat = {
        body: item.body,
        id: item.id,
        image: `https://robohash.org/${item.title}.png&size=200x300`,
        title: item.title,
        userId: item.userId
      }
      return dataItem;
    });
    this.setState({
      postData: data,
      filteredData:data,
      isLoading:false,
    });
  }

  onSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const searchText=e.target.value;
    const filteredData=this.state.postData.filter((data)=>data.title.includes(searchText));
    this.setState({
      filteredData
    })
  }


  //Rendering the ui
  render() {
    return (
      this.state.isLoading?<LoaderBox />:
      <div>
        <SearchBox onChange={this.onSearch} />
      <CardList itemsList={this.state.filteredData} />
      </div>
    );
  }


}