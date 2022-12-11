import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "type") {
      setForm({
        ...form,
        [id]: value,
        section: value,
      });
      if (form["media"] && value === "exposiciones") {
        setForm((article) => {
          let updateArticle = { ...article };
          delete updateArticle["media"];
          return updateArticle;
        });
      }
      if (form["image"] && value === "video") {
        setForm((article) => {
          let updateArticle = { ...article };
          delete updateArticle["image"];
          return updateArticle;
        });
      }
    } else {
      setForm({ ...form, [id]: value });
    }
  };
  const handleBlur = (e) => {
    const { id } = e.target;
    let completeArticle = {};
    handleChange(e);
    if (form.type === "balado" && id === "media") {
      const position = form.media.indexOf("/", 18);
      const sub1 = form.media.substring(0, position + 1);
      const sub2 = form.media.substring(position, form.media.length);
      completeArticle = { ...form, media: sub1 + "embed" + sub2 };
      setForm(completeArticle);
    }
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {
      let storageTemp =  JSON.parse(localStorage.getItem("lesalon"));
      let newStorage = [form, ...storageTemp ];
    localStorage.setItem("lesalon", JSON.stringify(newStorage));
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
