# Stock Trend Prediction using Sentimental Analysis & Stock price Prediction using Recurrent Neural Network

## Objective:

To build a prediction model for stock trend/price predictions for six major technology companies - Google, Amazon, Facebook, Tesla and Microsoft.

Project Start Date: 11th July 2020

Project End Date: 24th July 2020

#### Data Source: 

1. Yahoo finance python library

2. New York Times API (https://developer.nytimes.com/)

3. Reuters (https://www.reuters.com/news/technology)

4. Technewsworld (https://www.technewsworld.com/)

#### Data Approach:

News headlines and article snippet was scrapped from Reuters and Technewsworld news websites for the last 6 years. 
New York Times API endpoints were called to collect news headlines and article snippets for the last 6 years. 
Yahoo finance python library was used to collect data on the stock prices of the subject tech companies. 

#### Overview:

Built a machine learning model by performing sentiment analysis via Natural Language Processing (NLP) on the archived news headlines/article snippets and trained the data using Random Forest Classifier after combining it with the stock market data to predict a rise or drop in the stock prices of six major tech companies. Amazon web Services (S3 buckets) was used to store the data and then was loaded in Spark data frame after which NLP was performed and data was trained. Also, the accuracy of the model was compared with the Recurrent Neural Network (RNN) model which was trained using historical stock price data collected from Yahoo Finance. The insights were presented through an interactive website.

## Website:

Stock prediction analysis : https://stock-prediction-project.herokuapp.com/
