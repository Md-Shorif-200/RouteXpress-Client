import React from 'react';
import { useForm } from 'react-hook-form';
import img_1 from '../../assets/Book-Percel/img-1.jpg';

const BookPercelForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-black/60 px-4"
      style={{
        backgroundImage: `url(${img_1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply'
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form_section bg-white rounded-xl shadow-lg w-full max-w-lg p-6 space-y-3"
      >
        <h2 className="text-2xl font-bold text-emerald-600 text-center mb-4">Book a Parcel</h2>

        {/*--------------- Pickup Address */}
        <div>
          <label className="block text-sm font-semibold mb-1">Pickup Address</label>
          <input
            type="text"
            {...register('pickup', { required: 'Pickup address is required' })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter pickup address"
          />
          {errors.pickup && <p className="form_error">{errors.pickup.message}</p>}
        </div>

        {/* ----------------Delivery Address */}
        <div>
          <label className="block text-sm font-semibold mb-1">Delivery Address</label>
          <input
            type="text"
            {...register('delivery', { required: 'Delivery address is required' })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter delivery address"
          />
          {errors.delivery && <p className="form_error">{errors.delivery.message}</p>}
        </div>

        {/* ------------------Parcel Size */}
        <div>
          <label className="block text-sm font-semibold mb-2">Parcel Size</label>
          <select
            {...register('parcelSize', { required: 'Please select a parcel type' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select Parcel Type</option>
            <option value="small">Small (0-2kg)</option>
            <option value="medium">Medium (2-5kg)</option>
            <option value="large">Large (5kg+)</option>
          </select>
          {errors.parcelType && <p className="form_error">{errors.parcelType.message}</p>}
        </div>

        {/* --------------------Payment Option */}
        <div>
          <label className="block text-sm font-semibold mb-2">Payment Option</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="cod"
                {...register('payment', { required: 'Select a payment option' })}
              />
              <span>Cash on Delivery (COD)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="prepaid"
                {...register('payment')}
              />
              <span>Prepaid</span>
            </label>
          </div>
          {errors.payment && <p className="form_error">{errors.payment.message}</p>}
        </div>

        {/*------------------- Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookPercelForm;
