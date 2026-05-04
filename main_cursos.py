from fastapi import FastAPI
from utils import generar_guid
from models import AlumnoDTO, CursoDTO, CursosAlumnoDTO

app = FastAPI()



cursos = {}
alumnos = {}


###########################################
#                 CURSOS                 #
###########################################

# Crear curso
@app.post("/v1/curso")
def crear_curso(curso: CursoDTO):

    id_curso = generar_guid()

    cursos[id_curso] = {
        "id": id_curso,
        "nombre": curso.nombre
    }

    return cursos[id_curso]


# Obtener todos los cursos
@app.get("/v1/cursos")
def obtener_cursos():
    return list(cursos.values())


# Obtener curso por id
@app.get("/v1/curso/{id_curso}")
def obtener_curso(id_curso: str):
    return cursos.get(id_curso)


###########################################
#                 ALUMNOS                #
###########################################

# Crear alumno
@app.post("/v1/alumno")
def crear_alumno(alumno: AlumnoDTO):

    id_alumno = generar_guid()

    alumnos[id_alumno] = {
        "id": id_alumno,
        "nombre": alumno.nombre,
        "cursos_inscritos": alumno.cursos_inscritos
    }

    return alumnos[id_alumno]


# Obtener todos los alumnos
@app.get("/v1/alumnos")
def obtener_alumnos():
    return list(alumnos.values())


# Obtener alumno por id
@app.get("/v1/alumno/{id_alumno}")
def obtener_alumno(id_alumno: str):
    return alumnos.get(id_alumno)


# Actualizar cursos de un alumno
@app.patch("/v1/alumno/{id_alumno}")
def actualizar_cursos(id_alumno: str, datos: CursosAlumnoDTO):

    alumnos[id_alumno]["cursos_inscritos"] = datos.cursos_inscritos

    return alumnos[id_alumno]