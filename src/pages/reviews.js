import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  const productId = location.state?.productId || 1;
  console.log(productId);
  const url = 'https://c297-2001-e60-109d-2c59-8ce9-5099-f68c-2168.ngrok-free.app'
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/products/${productId}/reviews`, {
              headers: {
                'ngrok-skip-browser-warning': '69420',
                "withCredential": "true",
              }
            });
            setReviews(response.data.content);
            console.log(response);
          } catch (error) {
            console.error("Error fetching reviews:", error);
          }
    };

    fetchData();
  }, [productId]);
  return (
    <>
    <Nav backTo='/main'></Nav>
    <ReviewListContainer>
    {reviews.length === 0 ? (
      <NoReviewsMessage>아직 등록된 리뷰가 없습니다.</NoReviewsMessage>
    ) : (
      reviews.map(review => (
        <ReviewItem key={review.id}>
          <ReviewHeader>
            <Avatar src={review.imageUrl} alt={`${review.authorName}'s avatar`} />
            <AuthorName>{review.authorName}</AuthorName>
          </ReviewHeader>
          <Comment>{review.comment}</Comment>
          <Keywords>
            {review.selectedKeywords.map(keyword => (
              <Keyword key={keyword}>{keyword}</Keyword>
            ))}
          </Keywords>
        </ReviewItem>
      ))
    )}
  </ReviewListContainer>
  </>
  );
};

export default Reviews;

const NoReviewsMessage = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  color: #888;
`;
const ReviewListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 0 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ReviewItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: #333;
`;

const Comment = styled.p`
  margin: 10px 0;
  color: #777;
`;

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Keyword = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #555;
`;
