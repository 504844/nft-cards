import React from "react";
import { Col, Card, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

function Nfts(props) {
  return (
    <Col xs="12" md="3">
      <OverlayTrigger
        overlay={
          <Tooltip id="tooltip-disabled">{props.item.extras.saleEnd}</Tooltip>
        }
      >
        <Card className="mb-4">
          <Card.Img
            variant="top"
            src={`../src/images/${props.item.coverImg}`}
          />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <div className="card__owner">
              <div className="card__owner__price">
                <p>
                  Price:
                  <br />
                  <FontAwesomeIcon icon={faEthereum} /> {props.item.price}
                </p>
              </div>
              <div className="card__owner__owned-by text-muted">
                <p>
                  Owned by: <a href="#">{props.item.ownedBy}</a>
                </p>
              </div>
            </div>
            <div className="card__top-badges">
              <div className="card__badges__review-count">
                <Badge bg="black">
                  <FontAwesomeIcon icon={faEye} />{" "}
                  {props.item.extras.reviewCount}
                </Badge>
                <Badge bg="black">
                  <FontAwesomeIcon icon={faHeart} />{" "}
                  {props.item.extras.favoriteCount}
                </Badge>
              </div>
            </div>
          </Card.Body>
        </Card>
      </OverlayTrigger>
    </Col>
  );
}
export default Nfts;
