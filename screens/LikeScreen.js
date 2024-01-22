import React, { Component, useState, useEffect } from 'react'
import { Button, View, Text, Image, ScrollView, Linking, StyleSheet, Dimensions } from 'react-native'
import axios from 'axios'
import { Card, Title, Paragraph } from 'react-native-paper'
import { AppImages } from '../assets-project';
import moment from 'moment';

const { width, height } = Dimensions.get("window");

const LikeScreen = props => {
  const [articles, articleValue] = useState([]);
  const [isLoading, isLoadingValue] = useState(true);
  const [errors, errorsValue] = useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async function () {
    try {
      const response = await axios({
        url: 'https://newsapi.org/v2/top-headlines?country=id&apiKey=0d9767b7a15a497ab9c988d408e34136',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      articleValue(response.data.articles)
      isLoadingValue(false)
      errorsValue(null)
    } catch (e) {
      console.log('error getArticles', e)
      articleValue([])
      isLoadingValue(false)
      errorsValue(e.toString())
    }
  }

  const renderLoading = () => {
    return (
      <View style={styles.root}>
        <Text>Loading...</Text>
      </View>
    )
  }

  const renderArticles = () => {
    return (
      <View>
        <ScrollView>
          <View>
            {
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
            }
          </View>
          <View style={{marginTop:110}}></View>
        </ScrollView>
      </View>
    )
  }

  return (
    !isLoading ? renderArticles() : renderLoading()
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LikeScreen;