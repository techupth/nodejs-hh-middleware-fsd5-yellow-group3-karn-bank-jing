import fs from "fs/promises";

const logging = async (req, res, next) => {
  try {
    //1 read file
    const buffer = await fs.readFile("./data/logs.txt");
    //2 เก็บข้อมูลจาก file เข้าไปใน array
    const strLogsHistory = buffer.toString().split("\n");
    //3 เพิ่มข้อมูลเข้าไปใน array
    strLogsHistory.push(
      `IP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`
    );
    //4. ่join ข้อมูลให้เป็น string เหมือนเดิม
    const newLogsHistory = strLogsHistory.join("\n");
    //5สร้างไฟล์
    await fs.writeFile("./data/logs.txt", newLogsHistory);

    console.log("File has been rewritten successfully");
  } catch (error) {
    console.log(error);
  }
  //   const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`;
  //   await fs.appendFile("logs.txt", text);
  // } catch {
  //   await fs.appendFile(
  //     "logs.txt",
  //     `\nLogging Error on IP: ${req.ip}, Method ${req.method},Endpoint ${req.originalUrl}`
  //   );
  // }

  next(); //ต้อง execute next() เพื่อให้สามารถไปต่อยัง middleware อื่นๆ หรือ callback ได้
};

export default logging;
