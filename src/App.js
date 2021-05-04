import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import * as API from './Services/Api';
import styles from './App.module.css';

export default class App extends Component{
  state = {
    images: [],
    largeImgURL: '',
    isLoading: false,
    isOpen: false,
    page: 1,
    query: '',
  };

  componentDidMount() {
    const { query, page } = this.state;
    this.getImages(query, page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, query, images } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.getImages(query, page);
    }
    if (prevState.images !== images && images.length > 12) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 500);
    }
  }
  onSearch = query => {
    this.setState({ images: [], query, page: 1 });
  };

  getImages = (query, page) => {
    this.setState({ isLoading: true });

    API.fetchImages(query, page)
      .then(res =>
        this.setState(
          prevState => ({
            images: [...prevState.images, ...res.data.hits],
          })),
      )
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      });
  };

  openModal = largeImgURL => this.setState({ isOpen: true, largeImgURL });

  closeModal = () => this.setState({ isOpen: false });

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, isOpen, images, largeImgURL } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {isOpen && (
          <Modal
            closeModal={this.closeModal}
            images={images}
            largeImgURL={largeImgURL}
          />
        )}
        <Button loadMore={this.loadMore} />
      </div>
    )
  }
}