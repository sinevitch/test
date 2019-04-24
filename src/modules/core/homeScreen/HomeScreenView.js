import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from '../../../store/Actions';
import { HomeScreenHook } from './HomeScreenHook';


const HomeScreenView = ({
  onGetAllNews,
  setNews,
  /*------*/
  stateDataGetting,
  allNews,
  navigation,
}) => {
  const { refreshing, handlerRefresh, handlerClick } = HomeScreenHook(
    onGetAllNews,
    allNews,
    setNews,
    navigation,
  );
  /* -------- */
  const renderContent = () => (
    <FlatList
      data={allNews}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemFlatList} onPress={() => handlerClick(item)}>
          <Text>{item.title}</Text>
          {item.urlToImage ? renderPicture(item.urlToImage) : noPicture()}
          <Text>{item.publishedAt}</Text>
        </TouchableOpacity>
      )}
      onRefresh={() => handlerRefresh()}
      refreshing={refreshing}
      keyExtractor={(item, index) => index.toString()}
    />
  );
  const renderPicture = url => (
    <View style={styles.picture}>
      <Image
        source={{ uri: `${url}` }}
        style={{ width: 80, height: 80 }}
        resizeMethod="resize"
      />
    </View>
  );
  const noPicture = () => (
    <View style={styles.picture}>
      <Text>No picture</Text>
    </View>
  );
  /* -------- */
  const renderSpinner = () => (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
  const renderError = () => (
    <View style={styles.spinner}>
      <Text>
        An error has occurred
      </Text>
    </View>
  );
  let content;
  switch (stateDataGetting) {
    case true:
      content = renderSpinner();
      break;
    case null:
      content = renderContent();
      break;
    case false:
      content = renderError();
      break;
    default:
      content = renderSpinner();
  }
  return (
    <View style={styles.container}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemFlatList: {
    padding: 10,
    margin: 30,
    borderWidth: 2,
    borderColor: 'green',
  },
  picture: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  allNews: state.core.allNews,
  stateDataGetting: state.root.stateDataGetting,
});

export default connect(mapStateToProps, Actions('core'))(HomeScreenView);

HomeScreenView.propTypes = {
  onGetAllNews: PropTypes.func.isRequired,
  setNews: PropTypes.func.isRequired,
  stateDataGetting: PropTypes.bool,
  allNews: PropTypes.arrayOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

HomeScreenView.defaultProps = {
  stateDataGetting: null,
  allNews: null,
};
