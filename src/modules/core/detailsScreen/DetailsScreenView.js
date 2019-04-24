import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { DetailsScreenHook } from './DetailsScreenHook';


const DetailsScreenView = ({
  news,
  navigation,
}) => {
  const { handlerLinking, handlerNavigation } = DetailsScreenHook(navigation);
  return (
    <ScrollView>
      {news.urlToImage ? (
        <Image
          source={{ uri: `${news.urlToImage}` }}
          style={styles.image}
          resizeMethod="resize"
        />
      ) : (
        <View style={{ ...styles.image, borderWidth: 1 }}>
          <Text>No picture</Text>
        </View>
      )}
      <View style={styles.sectionText}>
        <Text>{news.title}</Text>
      </View>
      <View style={styles.sectionText}>
        <Text>{news.publishedAt}</Text>
      </View>
      <View style={styles.sectionText}>
        <Text>{news.description}</Text>
      </View>
      <View>
        <Button onPress={() => handlerLinking(`${news.url}`)} title="Follow the link" />
      </View>
      <View>
        <Button onPress={() => handlerNavigation()} title="Go to Home" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  sectionText: {
    padding: 20,
  },
});

const mapStateToProps = state => ({
  news: state.core.news,
});

DetailsScreenView.propTypes = {
  news: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(DetailsScreenView);
