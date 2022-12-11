import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useForm } from "../hooks/useForm";
import "simplebar";
import "simplebar/dist/simplebar.css";
import "../styles/lesalon.css";
import "../styles/article.css";


import * as Data from "../data/article";

const curr = new Date();
const date = curr.toISOString().substr(0, 10);
!localStorage.getItem("lesalon") &&
  localStorage.setItem("lesalon", JSON.stringify(Data["lesalon"]));
const articles = JSON.parse(localStorage.getItem("lesalon"));

const initialForm = {
  id: `${articles.length + 1}`,
  name: "",
  date: `${date}`,
  image: [],
  section: "exposiciones",
  type: "exposiciones",
  description: "",
};
const validationsForm = (form) => {
  let errors = {};
  !form.name.trim() && (errors.name = "'Article Name' field is required");
  !form.description.trim() &&
    (errors.description = "'Description' field is required");
  if (form.media?.trim()) {
    errors.media = "'Media URL' field is required";
  }

  return errors;
};

export const Crudarticle = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const [media, setMedia] = useState({ [uuidv4()]: "" });

  // const searchHandle = () => {
  //   const encontrado = articles.find((article) => article.name === {});
  // };

  const putMediaHandle = (e) => {
    e.preventDefault();
    setMedia({ ...media, [uuidv4()]: "" });
  };

  const changeMediaHandle = (key, value) => {
    setMedia({ ...media, [key]: value });
  };

  const deleteMediaHandle = (key) => {
    setMedia((media) => {
      let newMedia = { ...media };
      delete newMedia[key];
      return newMedia;
    });
  };

  const changeTypeHandle = (e) => {
    setMedia({ [uuidv4()]: "" });
    handleChange(e)
  }

  useEffect(() => {
    let auxtemp = Object.values(media);
    form.image = auxtemp;
  }, [media]);

  return (
    <div data-simplebar className="detail generalContent">
      {/* <input type="text" placeholder="nombre articulo" /> */}
      {/* <button onClick={searchHandle}>buscar</button> */}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              id="name"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Article Name"
              value={form.name}
              className="form-control"
              required
            />
          </div>
          <input
            type="date"
            id="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.date}
            required
          />
          <br />
          <br />
          <h3>ARTICLE TYPE</h3>
          <select
            name="type"
            id="type"
            onChange={changeTypeHandle}
            onBlur={handleBlur}
            placeholder="Select an option"
            value={form.type}
          >
            <option value="exposiciones">Simple Article</option>
            <option value="balado">Balado</option>
            <option value="video">Video</option>
          </select>
          <br />
          <br />
          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            name=""
            id="description"
            cols="30"
            rows="10"
            value={form.description}
            required
            className="form-control"
          />
          <br />
          <br />
          {form.type === "exposiciones" && (
            <button onClick={putMediaHandle}>add media</button>
          )}
          <div>
            {Object.keys(media).map((key, i) => {
              return (
                form.type !== "video" && (
                  <React.Fragment key={key}>
                    <div className="mediapath">
                      <i className="generaltext">{i + 1}. </i>
                      <input
                        id="image"
                        name="image"
                        type="text"
                        value={media[key]}
                        onChange={(e) => {
                          changeMediaHandle(key, e.target.value);
                        }}
                        required
                        className="form-control"
                      />
                      {Object.keys(media).length > 1 && (
                        <button
                          className="general_button"
                          onClick={() => {
                            deleteMediaHandle(key);
                          }}
                        >
                          <HighlightOffIcon />
                        </button>
                      )}
                    </div>
                  </React.Fragment>
                )
              );
            })}
          </div>
          {form.type !== "exposiciones" && (
            <div className="mediapath">
              <i className="generaltext">Media url: </i>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                id="media"
                placeholder="Media URL"
                value={form.media}
                required
                className="form-control"
              />
            </div>
          )}
        </div>
        <input type="submit" value="Registrar / Actualizar" />
        <input type="reset" value="Limpiar" />
      </form>
    </div>
  );
};
