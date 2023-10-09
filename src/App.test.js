import { render, screen } from "@testing-library/react";
import BookingForm from './assets/components/BookingForm';

test('Renders the BookingForm heading', () => {
    // Mock the required props
    const props = {
        availableTimes: [], // Provide an empty array or mock data as needed
    };

    render(<BookingForm {...props} />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
});
