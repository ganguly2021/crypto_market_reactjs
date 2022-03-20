import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "./../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoUrl =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;

  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count,
  });

  // if api is still fetching
  if (isFetching) {
    return "Loading...";
  }

  console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, key) => (
        <Col xs={24} sm={12} lg={8} key={key}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: '200', maxHeight: '200' }}
                  src={news?.image?.thumbnail?.contentUrl || demoUrl}
                  alt="news"
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl || demoUrl
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
