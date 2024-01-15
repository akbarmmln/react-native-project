import React, { Component } from 'react'
import { View, Text, Image, ScrollView, Linking, StyleSheet, Dimensions } from 'react-native'
import axios from 'axios'
import { Card, Title, Paragraph } from 'react-native-paper'
import { AppImages } from '../assets-project';
import moment from 'moment';

export default class LikeScreen extends Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=0d9767b7a15a497ab9c988d408e34136"
      )
      .then((response) => {
        this.setState({
          articles: response.data.articles,
          isLoading: false
        });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false })
      })
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <View>
        <ScrollView>
          {!isLoading ? (
            articles.map(article => {
              const { publishedAt, title, url, description, urlToImage } = article;
              return (
                <Card key={url} style={{ margin: 10, backgroundColor: 'white', borderRadius: 15 }}
                  onPress={() => { Linking.openURL(`${url}`) }}
                >
                  <View style={{ flexDirection: 'row', }}>
                    {/*  Text */}
                    <View style={{ justifyContent: 'space-around', flex: 2 / 3, margin: 10 }}>
                      <Title>{title}</Title>
                    </View>
                    {/*  Image */}
                    <View style={{ flex: 1 / 3, margin: 10 }}>
                      <Image style={{ width: 120, height: 120 }} source={{ uri: urlToImage }} />
                    </View>
                  </View>
                  <View style={{ margin: 10 }}>
                    <Paragraph>{description}</Paragraph>
                    <Text>{moment(publishedAt).format('DD-MM-YYYY HH:mm:ss')}</Text>
                  </View>
                </Card>
              );
            })
          ) : (
            <View style={styles.root}>
              <Text>Loading...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
