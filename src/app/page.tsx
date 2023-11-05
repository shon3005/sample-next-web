"use client"

import { Form } from "@quillforms/renderer-core"
import { registerCoreBlocks } from "@quillforms/react-renderer-utils"
import "@quillforms/renderer-core/build-style/style.css"
registerCoreBlocks()

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "Welcome to our survey",
                description: "This is just a description",
                attachment: {
                  type: "image",
                  url:
                    "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
                }
              }
            },
            {
              name: "short-text",
              id: "kd12edg",
              attributes: {
	        classnames: "first-block",
                required: true,
                label: "Let's start with your name"
              }
            },
            {
              name: "multiple-choice",
              id: "gqr1294c",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: false,
                label: "Which subjects do you love the most?",
                choices: [
                  {
                    label: "Physics",
                    value: "physics"
                  },
                  {
                    label: "Math",
                    value: "math"
                  },
                  {
                    label: "English",
                    value: "english"
                  },
                  {
                    label: "Biology",
                    value: "biology"
                  }
                ]
              }
            },
          ],
        }}
        onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>

  )
}
