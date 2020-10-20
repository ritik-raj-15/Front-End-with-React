import React,{Component} from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }

    }

    render()
    {
                const dish = this.props.dish;
                return this.renderDish(dish);
    }
    renderComments(comments)
    {
        const com= comments.map((commo)=>{
            return(
                         <div key={commo.id} className="col-12 list-unstyled">
                            <ul className="list-unstyled">
                                <li>{commo.comment}</li>
                            </ul>
                            <ul className="list-unstyled">
                                <li>--{commo.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commo.date)))}</li>
                            </ul>
                        </div>
                );
        });
        return(
        <div>
            <h4>Comments</h4>
                {com}   
        </div>
        );
    }
    renderDish(dish) {
        if (dish != null)
          {  
            var comments = this.renderComments(dish.comments);
            return(
                <div className="row">
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                        <div >{comments}</div>
                </div>
            );
          }
        else
            return(
                <div></div>
            );
    }  
}
export default Dishdetail;