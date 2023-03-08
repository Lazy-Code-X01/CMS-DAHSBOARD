import {useState} from 'react'
import { useGetIdentity } from '@pankod/refine-core'
import { FieldValues, useForm } from '@pankod/refine-react-hook-form'
import { useNavigate } from '@pankod/refine-react-router-v6'

import Form from 'components/common/Form'

const CreateMembers = () => {
  const navigate = useNavigate()
  const {data: user} = useGetIdentity()
  const [memberImage, setMemberImage] = useState({name: '', url: ''})
  const {refineCore: {onFinish, formLoading}, register, handleSubmit} = useForm()

  // additional functions
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });

    reader(file).then((result: string) => setMemberImage({ name: file?.name, url: result }));
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!memberImage.name) return alert('Please select an image')
    
    await onFinish({ ...data, photo: memberImage.url, email: user.email})
  }

  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      memberImage={memberImage}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
    />
  )
}

export default CreateMembers