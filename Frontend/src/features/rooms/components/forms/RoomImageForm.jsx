//src/features/rooms/conponents/forms/RoomImageForm.jsx 

import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import "./room-image-form.css";

function RoomImageForm({
  defaultValues = {},
  onSubmit,
  isLoading = false,
  maxImages = 10,
}) {
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imageUrl: "",
      images: [],
      coverImage: "",
      ...defaultValues,
    },
  });

  const coverImage = watch("coverImage");

  useEffect(() => {
    const defaultImages =
      defaultValues?.images || [];

    setImages(defaultImages);

    reset({
      imageUrl: "",
      images: defaultImages,
      coverImage:
        defaultValues?.coverImage ||
        defaultImages?.[0] ||
        "",
      ...defaultValues,
    });
  }, [defaultValues, reset]);

  const remainingSlots = useMemo(() => {
    return maxImages - images.length;
  }, [images.length, maxImages]);

  const addImage = (data) => {
    const imageUrl = data.imageUrl?.trim();

    if (!imageUrl) return;

    const alreadyExists =
      images.includes(imageUrl);

    if (alreadyExists) return;

    if (images.length >= maxImages) {
      return;
    }

    const updatedImages = [
      ...images,
      imageUrl,
    ];

    setImages(updatedImages);

    setValue("images", updatedImages);

    if (!coverImage) {
      setValue("coverImage", imageUrl);
    }

    reset({
      imageUrl: "",
      images: updatedImages,
      coverImage:
        coverImage || imageUrl,
    });
  };

  const removeImage = (image) => {
    const updatedImages = images.filter(
      (item) => item !== image
    );

    setImages(updatedImages);

    setValue("images", updatedImages);

    if (coverImage === image) {
      setValue(
        "coverImage",
        updatedImages[0] || ""
      );
    }
  };

  const setAsCoverImage = (image) => {
    setValue("coverImage", image);
  };

  const submitHandler = () => {
    const formattedData = {
      images,
      coverImage:
        watch("coverImage") || "",
    };

    if (onSubmit) {
      onSubmit(formattedData);
    }
  };

  return (
    <div className="room-image-form">
      {/* Header */}
      <div className="room-image-form__header">
        <h2 className="room-image-form__title">
          Room Images
        </h2>

        <p className="room-image-form__subtitle">
          Upload and manage room gallery
        </p>
      </div>

      {/* Add Image Form */}
      <form
        className="room-image-form__add-form"
        onSubmit={handleSubmit(addImage)}
      >
        <div className="room-image-form__group">
          <label className="room-image-form__label">
            Image URL
          </label>

          <div className="room-image-form__input-wrapper">
            <input
              type="url"
              placeholder="https://example.com/room-image.jpg"
              className="room-image-form__input"
              {...register("imageUrl", {
                required:
                  "Image URL is required",

                pattern: {
                  value:
                    /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))/i,

                  message:
                    "Enter a valid image URL",
                },
              })}
            />

            <button
              type="submit"
              className="room-image-form__add-button"
              disabled={
                images.length >= maxImages
              }
            >
              Add Image
            </button>
          </div>

          {errors.imageUrl && (
            <p className="room-image-form__error">
              {errors.imageUrl.message}
            </p>
          )}

          <small className="room-image-form__hint">
            Remaining slots:{" "}
            {remainingSlots}
          </small>
        </div>
      </form>

      {/* Image Grid */}
      <form
        onSubmit={handleSubmit(
          submitHandler
        )}
      >
        {images.length > 0 ? (
          <div className="room-image-form__grid">
            {images.map((image, index) => {
              const isCover =
                coverImage === image;

              return (
                <div
                  key={index}
                  className={`room-image-form__card ${
                    isCover
                      ? "room-image-form__card--cover"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Room ${index + 1}`}
                    className="room-image-form__image"
                  />

                  {/* Cover Badge */}
                  {isCover && (
                    <span className="room-image-form__cover-badge">
                      Cover
                    </span>
                  )}

                  {/* Actions */}
                  <div className="room-image-form__actions">
                    {!isCover && (
                      <button
                        type="button"
                        className="room-image-form__action room-image-form__action--primary"
                        onClick={() =>
                          setAsCoverImage(
                            image
                          )
                        }
                      >
                        Set Cover
                      </button>
                    )}

                    <button
                      type="button"
                      className="room-image-form__action room-image-form__action--danger"
                      onClick={() =>
                        removeImage(image)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="room-image-form__empty">
            <p>
              No room images added yet
            </p>
          </div>
        )}

        {/* Hidden Inputs */}
        <input
          type="hidden"
          {...register("images", {
            validate: () =>
              images.length > 0 ||
              "Add at least one image",
          })}
        />

        <input
          type="hidden"
          {...register("coverImage")}
        />

        {errors.images && (
          <p className="room-image-form__error">
            {errors.images.message}
          </p>
        )}

        {/* Footer */}
        <div className="room-image-form__footer">
          <button
            type="submit"
            className="room-image-form__submit"
            disabled={
              isLoading ||
              images.length === 0
            }
          >
            {isLoading
              ? "Saving..."
              : "Save Images"}
          </button>
        </div>
      </form>
    </div>
  );
}

RoomImageForm.propTypes = {
  defaultValues: PropTypes.shape({
    images: PropTypes.array,
    coverImage: PropTypes.string,
  }),

  onSubmit: PropTypes.func,

  isLoading: PropTypes.bool,

  maxImages: PropTypes.number,
};

export default RoomImageForm;