/* eslint-disable no-unused-vars */

import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { mobile } from "../../../responsive";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { app } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/apiCalls";
const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #dcd5d56e;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  justify-content: center;
  box-shadow: 0 0 4px #dfd0d0;
  border-radius: 8px;
  background: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "none",
  })}
`;
const Illustration = styled.img`
  height: 70%;
  object-fit: contain;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 24px auto;
`;

const Form = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input`
  width: 70%;
  margin: 8px 0;
  padding: 8px;
`;
const Label = styled.label``;
const Select = styled.select`
  width: 70%;
  margin: 8px 0;
  padding: 8px;
`;
const Option = styled.option``;

const Button = styled.button`
  margin: 24px 0 0 0;
  border: 1px solid gray;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  width: 50%;

  &:disabled {
    background-color: gray;
    color: black;
  }
`;

const Error = styled.span`
  color: red;
`;

const CreateProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const { error, isFetching } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleCommaSepratedValues = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value.split(","),
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!file || !inputs) {
      return;
    }
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + percentage + "% done");
        setProgress(percentage.toFixed(2));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;

          default:
            console.log("default");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log("Failed to upload files", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //   console.log("File available at", downloadURL);
          console.log("formData", { ...inputs, img: downloadURL });
          const product = { ...inputs, img: downloadURL };
            createProduct(dispatch, product);
        });
      }
    );
  };
  console.log("isFetching", isFetching);
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <Illustration src="https://img.freepik.com/free-vector/creation-process-concept-illustration_114360-2091.jpg?size=626&ext=jpg&ga=GA1.1.997805722.1697538734&semt=ais" />
          </Left>
          <Right>
            <Title>New Product</Title>
            <Form>
              <FormItem>
                <Label>Image</Label>
                <Input
                  name="img"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormItem>

              <FormItem>
                <Label>Name</Label>
                <Input name="title" onChange={(e) => handleChange(e)} />
              </FormItem>

              <FormItem>
                <Label>Description</Label>
                <Input name="desc" onChange={(e) => handleChange(e)} />
              </FormItem>

              <FormItem>
                <Label>Categories</Label>
                <Input
                  name="categories"
                  type="text"
                  placeholder="mens,women"
                  onChange={(e) => handleCommaSepratedValues(e)}
                />
              </FormItem>

              <FormItem>
                <Label>Size</Label>
                <Input
                  name="size"
                  type="text"
                  placeholder="M,L"
                  onChange={(e) => handleCommaSepratedValues(e)}
                />
              </FormItem>

              <FormItem>
                <Label>Colors</Label>
                <Input
                  name="colors"
                  type="text"
                  placeholder="red,black"
                  onChange={(e) => handleCommaSepratedValues(e)}
                />
              </FormItem>

              <FormItem>
                <Label>Price</Label>
                <Input
                  name="price"
                  type="number"
                  onChange={(e) => handleChange(e)}
                />
              </FormItem>

              <FormItem>
                <Label>Stock</Label>
                <Select name="inStock" onChange={(e) => handleChange(e)}>
                  <Option value="true">Yes</Option>
                  <Option value="false">No</Option>
                </Select>
              </FormItem>
            </Form>
            <Button onClick={handleClick} disabled={isFetching}>
              Create
            </Button>
            {progress < 100 && <span>Uploading file: {progress}</span>}
            {progress == 100 && <span>Uploaded file</span>}

            {error && <Error>Failed to create product</Error>}
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default CreateProduct;
