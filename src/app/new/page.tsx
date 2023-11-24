"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }: any) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/games/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.title, data.description, data.image);

          setTitle(data.title);
          setDescription(data.description);
          setImage(data.image);
        });
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/games/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description, image }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {

      const res = await fetch("/api/", {
        method: "POST",
        body: JSON.stringify({ title, description, image }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(title, description, image);

      const data = await res.json();
      console.log(data);
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Titulo del Juego
        </label>
        <input
          type="text"
          id="title"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="image" className="font-bold text-sm">
          Url de la imagen
        </label>
        <input
          type="text"
          id="image"
          placeholder="https://"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripción del Juego
        </label>
        <textarea
          id="description"
          rows={3}
          placeholder="Describe el Juego"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <div className="flex justify-between">
          <button type="submit"
          >
            {params.id ? "Editar" : "Crear"}
          </button>

          {params.id && (
            <button
              type="button"
              onClick={async () => {
                const res = await fetch(`/api/games/${params.id}`, {
                  method: "DELETE"
                })
                const data = await res.json()
                router.refresh();
                router.push("/");
              }}
            >
              Borrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
