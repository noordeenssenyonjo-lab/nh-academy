@@
 import Header from '../../../components/Header'
 import { COURSES } from '../../../lib/data'
+import AudioPlayer from '../../../components/AudioPlayer'
@@
   return (
     <div className="p-4">
       <Header setLang={setLang} lang={lang} />
       <h1 className="text-2xl font-bold">{c.title}</h1>
-      <p className="mt-2 text-gray-700">{c.description}</p>
+      <p className="mt-2 text-gray-700">{c.description}</p>
+      {/* Audio player: on-demand AI voice reads the lesson description (English/Arabic) */}
+      <AudioPlayer text={c.description} lang={lang === 'ar' ? 'ar' : 'en'} />
       <div className="mt-4 space-y-2">
         <div><strong>Level:</strong> {c.level}</div>
         <div><strong>Teacher:</strong> {c.teacher}</div>
         <div><strong>Duration:</strong> {c.duration}</div>
         <div><strong>Lessons:</strong> {c.lessons}</div>
       </div>
