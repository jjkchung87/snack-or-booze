import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import SnackOrBoozeApi from "./Api";


function AddItem() {

    const [formData, setFormData] = useState(null)
    
    const history = useHistory()

    const handleChange = (e) => {
        const {name} = e.target
        const {value} = e.target
        setFormData(formData => (
            {...formData, [name]: value }
        ))
    }

    async function handleSubmit (e) {
        e.preventDefault()
        const {foodType, ...data} = formData
        console.log(formData)
        await SnackOrBoozeApi.addItem({foodType,data})
        history.push("/")

    }


  
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                <CardTitle>
                    <h3 className="font-weight-bold">
                    Add a New Item
                    </h3>
                </CardTitle>
                </CardBody>
            </Card>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label
                    for="name"
                    sm={2}
                    >
                    Name
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="name"
                        name="name"
                        placeholder="enter name"
                        type="text"
                        onChange={handleChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="description"
                    sm={2}
                    >
                    Description
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="description"
                        name="description"
                        placeholder="enter description"
                        type="textarea"
                        onChange={handleChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="recipe"
                    sm={2}
                    >
                    Recipe
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="recipe"
                        name="recipe"
                        placeholder="enter recipe"
                        type="textarea"
                        onChange={handleChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="serve"
                    sm={2}
                    >
                    Serve
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="serve"
                        name="serve"
                        placeholder="enter serve instructions"
                        type="textarea"
                        onChange={handleChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="foodType"
                    sm={2}
                    >
                    Select
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="foodType"
                        name="foodType"
                        type="select"
                        onChange={handleChange}
                    >
                        <option>
                        snacks
                        </option>
                        <option>
                        drinks
                        </option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                    sm={{
                        offset: 2,
                        size: 10
                    }}
                    >
                    <Button>
                        Submit
                    </Button>
                    </Col>
                </FormGroup>
            </Form>
        </section>
  );
}

export default AddItem;
