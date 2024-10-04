import { ScriptService } from './script.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );
  const scriptsService = application.get(ScriptService);

  const command = process.argv[2];

  switch (command) {
    case 'upload':
      const filePath = process.argv[3]
      await scriptsService.upload(filePath);
      break;
    default:
      console.error('incorrect command');
  }

  process.exit(0);
}

bootstrap();