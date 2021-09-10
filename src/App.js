import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ApiGallery from "./components/APIGallery/ApiGallery";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

class App extends Component {
  state = {
    gallery: [],
    searchQuery: "",
    page: 1,
    isLoader: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  FormSubmitHandler = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      gallery: [],
      error: null,
    });
  };

  fetchGallery = (event) => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoader: true });

    ApiGallery(searchQuery.name, page)
      .then((hits) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .then(() => {
        if (page > 1)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  };

  render() {
    const { gallery, isLoader } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.FormSubmitHandler} />
        <ImageGallery
          gallery={gallery}
          onFetchGallery={this.fetchGallery}
          isLoader={isLoader}
        />
      </>
    );
  }
}

export default App;
