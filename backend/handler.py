import pymysql
import json
from dotenv import load_dotenv
import os

load_dotenv()

endpoint = os.getenv("DB_ENDPOINT")
username = os.getenv("DB_USERNAME")
password = os.getenv("DB_PASSWORD")
database_name = os.getenv("DB_NAME")

connection = pymysql.connect(host=endpoint, user=username, password=password, db=database_name)

def lambda_handler(event, context):
    # Get query string parameters if available
    query_params = event.get('queryStringParameters', {})
    
    imdbID = query_params.get('imdbID')
    all_movies = query_params.get('allMovies')

    # Execute SQL query and print results
    cursor = connection.cursor()
    if imdbID:
        cursor.execute(
            "SELECT * FROM movies WHERE imdbID = %s", (imdbID,)
        )
    elif all_movies:
        cursor.execute("SELECT * FROM movies ORDER BY ABS(imdbRating) DESC")
    rows = cursor.fetchall()

    # Create list of dictionaries with specified columns
    movies_list = []
    for row in rows:
        movie_dict = {
            'Title': row[0],
            'Year': row[1],
            'Rated': row[2],
            'Released': row[3],
            'Runtime': row[4],
            'Genre': row[5],
            'Director': row[6],
            'Writer': row[7],
            'Actors': row[8],
            'Plot': row[9],
            'Language': row[10],
            'Country': row[11],
            'Awards': row[12],
            'Poster': row[13],
            'Metascore': row[14],
            'imdbRating': row[15],
            'imdbVotes': row[16],
            'imdbID': row[17],
            'Type': row[18],
            'DVD': row[19],
            'BoxOffice': row[20],
            'Production': row[21],
            'Website': row[22],
            'Response': row[23]
        }
        movies_list.append(movie_dict)

    # Return response
    response = {
        'statusCode': 200,
        'body': json.dumps({'movies': movies_list}),
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    }
    return response