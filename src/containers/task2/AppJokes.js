import React, {Component} from 'react';
import Button from "../../components/task2/Button/Button";
import Joke from "../../components/task2/Joke/Joke";


class Jokes extends Component {
    state = {
        jokes: []
    };

    getJokes = () => {
        const urls = [];

        for (let i = 0; i < 5; i++) {
            urls.push('https://api.chucknorris.io/jokes/random');
        }

        Promise.all(urls.map(url =>
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error ('Error');
                })
        )).then(jokes => {
            this.setState({jokes})
        }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="container">
                <h3>Task2</h3>
                <Button
                    label="Get joke"
                    onClick={this.getJokes}
                />

                {this.state.jokes.map(joke => (
                    <Joke
                        key={joke.id}
                        value={joke.value}
                    />
                ))}
            </div>
        );
    }
}

export default Jokes;
