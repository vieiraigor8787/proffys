export default function convertHourToMinutes(time: string) {
    // 8:00
    const [hour, minutes] = time.split(':').map(Number)
                            // 8 * 60 + 0 = 480
    const timeInMinutes = (hour * 60) + minutes;
    
    return timeInMinutes;
}